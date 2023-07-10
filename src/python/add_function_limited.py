def add_function_limited(first, second):
    if (first > 10) or (second > 10):
        raise ValueError("Die Werte dürfen nicht größer als 10 sein.")
    return first + second

