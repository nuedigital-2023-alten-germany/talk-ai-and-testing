def containSubstring(mainStr, subStr):
    return subStr in mainStr

def containSubstringInsensitiv(mainStr, subStr, isCaseInsensitiv):
    if isCaseInsensitiv:
        subStr = subStr.lower()
        mainStr = mainStr.lower()
    return subStr in mainStr