# -*- coding: utf-8 -*-

import sys
from pydocx import PyDocX

def file_change(input, output='out.html'):
    html = PyDocX.to_html(input)
    # the title
    html = html.replace('pydocx-center', 'pydocx-center subtitle', -1)
    # the subtitle
    html = html.replace('pydocx-center subtitle', 'pydocx-center title', 2)
    with open(output, 'w', encoding='utf-8') as f:
        f.write(html)
        f.close

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("cmd invalid, valid cmd format: python docx2html.py inputfile [outputfile]")
    elif len(sys.argv) == 2:
        file_change(sys.argv[1])
    else:
        file_change(sys.argv[1], sys.argv[2])