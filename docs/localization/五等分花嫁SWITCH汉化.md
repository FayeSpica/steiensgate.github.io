---
title: 五等分花嫁SWITCH汉化
lang: zh-CN
datetime: 2020-10-15
meta:
  - name: description
    content: 五等分花嫁SWITCH汉化
  - name: keywords
    content: 五等分花嫁, 汉化, Switch
---

<!-- more -->

**五等分花嫁 SWITCH 汉化**

![pic](./5/pic.jpg)

---

- [解包&打包](#解包&打包)
  - [工具](#工具)
  - [解包](#解包)
  - [文本提取](#文本提取)
  - [打包](#打包)

---

## 解包&打包

### 工具

1. FreeMote [https://github.com/UlyssesWu/FreeMote](https://github.com/UlyssesWu/FreeMote)
2. IDA Pro [https://hex-rays.com/ida-pro/](https://hex-rays.com/ida-pro/)

### 解包

Mages 引擎，文本存储在 PSB 中，需要拿到对应解密的 KEY

五等分的 KEY 为 523aad2de7132，解包命令：

```bash
.\PsbDecompile.exe info-psb -k 523aad2de7132 scenario_info.psb.m -a
```

其它文件，诸如字库、图片均可使用 FreeMote 里带的 PsbDecompile 工具完成解包

### 文本提取

解出来的文本为.txt.scn.m.json 格式，参考的提取方法：

```python
import json
import codecs
import sys, os

def get_text(source, target):
    f = codecs.open(source, encoding='utf-8')

    script_data = json.load(f)
    objects_keys = script_data.keys()

    texts_file = codecs.open(target, mode='w', encoding='utf-8')

    if u'scenes' not in script_data:
        print('invalid json script')
        exit()

    scenes = script_data['scenes']
    index = 0

    for i in scenes:
        if 'texts' in i:
            texts = i['texts']
            for j in texts:
                if j[1] is not None:
                    index += 1
                    texts_file.write(str(j[0]) + ": ")
                    texts_file.write(j[1][0][1])
                    texts_file.writelines('\n')
        else:
            print('not texts entry')


if __name__ == '__main__':
    path = "./scenario"
    extracted_path = "./extracted"
    for f_name in os.listdir(path):
        if f_name.endswith(".txt.scn.m.json"):
            print(path + "/" + f_name, extracted_path + "/" + f_name.replace(".txt.scn.m.json", ".txt"))
            get_text(path + "/" + f_name, extracted_path + "/" + f_name.replace(".txt.scn.m.json", ".txt"))
```

### 打包

```bash
.\PsBuild.exe info-psb -k 523aad2de7132 .\scenario_info.psb.m.json
```

<Advertisement />
