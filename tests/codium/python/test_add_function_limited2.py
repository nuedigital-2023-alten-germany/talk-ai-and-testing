
# Generated by CodiumAI
from src.python.add_function_limited import add_function_limited


import pytest

"""
Code Analysis

Objective:
The objective of the add_function_limited is to add two numbers and return the result, but only if both numbers are less than or equal to 10. If either of the numbers is greater than 10, the function raises an exception with the message "Parameters too big".

Inputs:
- first: a number to be added
- second: a number to be added

Flow:
1. Check if either first or second is greater than 10
2. If either is greater than 10, raise an exception with the message "Parameters too big"
3. If both are less than or equal to 10, add them together
4. Return the result of the addition

Outputs:
- The sum of the two input numbers if both are less than or equal to 10
- An exception with the message "Parameters too big" if either input number is greater than 10

Additional aspects:
- The function is limited to adding numbers that are less than or equal to 10
- The function uses an exception to handle cases where the input numbers are too big
- The function does not modify the input numbers, it only adds them together and returns the result
"""
class TestAddFunctionLimited:
    # Tests that the function returns the correct sum of two small positive integers
    def test_small_positive_integers(self):
        assert add_function_limited(2, 3) == 5

    # Tests that the function returns the correct sum of zero and a small positive integer
    def test_zero_and_small_positive_integer(self):
        assert add_function_limited(0, 5) == 5

    # Tests that the function returns zero when given two zeros
    def test_two_zeros(self):
        assert add_function_limited(0, 0) == 0

    # Tests that the function raises an exception when given one small positive integer and one integer equal to 10
    def test_one_small_positive_and_one_integer_equal_to_10(self):
        with pytest.raises(Exception):
            add_function_limited(5, 10)

    #TODO: Grenzwert falsch interpretiert, 10 sollte keine Exception werfen!!

    # Tests that the function raises an exception when given one small positive integer and one integer greater than 10
    def test_one_small_positive_and_one_integer_greater_than_10(self):
        with pytest.raises(Exception):
            add_function_limited(5, 11)

    # Tests that the function raises an exception when given two integers equal to 10
    def test_two_integers_equal_to_10(self):
        with pytest.raises(Exception):
            add_function_limited(10, 10)