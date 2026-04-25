import os
import re

directory = r'C:\aspireai\content\blogs'
files = [f for f in os.listdir(directory) if f.endswith('.ts')]

for filename in files:
    path = os.path.join(directory, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match the template literal part. 
    pattern = re.compile(r'(export const (?:content|blogContent) = `)(.*)(`;)', re.DOTALL)
    match = pattern.search(content)
    
    if match:
        prefix = match.group(1)
        body = match.group(2)
        suffix = match.group(3)
        
        # Escape backticks that are not already escaped.
        # (?<!\\)` matches any backtick not preceded by a backslash.
        fixed_body = re.sub(r'(?<!\\)`', r'\`', body)
        
        if fixed_body != body:
            new_content = prefix + fixed_body + suffix
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Updated {filename}')
        else:
            print(f'No changes needed for {filename}')
    else:
        # Check for files that might not have a semicolon at the end
        pattern2 = re.compile(r'(export const (?:content|blogContent) = `)(.*)(`)', re.DOTALL)
        match2 = pattern2.search(content)
        if match2:
             prefix = match2.group(1)
             body = match2.group(2)
             suffix = match2.group(3)
             fixed_body = re.sub(r'(?<!\\)`', r'\`', body)
             if fixed_body != body:
                new_content = prefix + fixed_body + suffix
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filename} (no semicolon)')
             else:
                print(f'No changes needed for {filename}')
        else:
            print(f'Could not find content pattern in {filename}')
