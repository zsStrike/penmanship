import os
import xlrd


def convert_pdf():
    static_dir = os.walk('static/docx')
    for path, dir_list, file_list in static_dir:
        print(path)
        print('lowriter --convert-to pdf {0}/*.docx --outdir {1}'.format(path, path.replace('docx', 'pdf')))
        res = os.popen(
            'lowriter --convert-to pdf {0}/*.docx --outdir {1}'.format(path, path.replace('docx', 'pdf'))).read()
        # print(res)


def get_dir_detail(param, url):
    path = 'static/pdf/{}'.format(param)
    files = os.listdir(path)
    return [{'time': os.path.getatime(path + '/' + file), 'url': url + '/' + path + '/' + file,
             'title': os.path.splitext(file)[0]} for file in files if not file[0] == '.']
    # return [{'time': datetime.fromtimestamp(os.path.getatime(file))} for file in files]


def get_excel(param):
    path = 'static/xlsx/{}.xlsx'.format(param)
    f = xlrd.open_workbook(path)
    sheet = f.sheet_by_index(0)
    names = sheet.col_values(0)
    urls = sheet.col_values(1)
    return [{'name': names[i], 'url': urls[i]} for i in range(len(names))]
