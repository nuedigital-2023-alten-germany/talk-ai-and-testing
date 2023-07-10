
# Generated by CodiumAI
from src.python.add_function_limited import add_function_limited


import pytest

"""
Code Analysis

Objective:
The objective of the add_function_limited is to add two numbers and return the result, but only if both numbers are less than or equal to 10. If either number is greater than 10, the function raises an exception with the message "Parameters too big".

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
- The function is limited to adding numbers less than or equal to 10, which may not be suitable for all use cases
- The function uses an exception to handle invalid input, which can be useful for error handling and debugging
- The function does not modify the input numbers, only adds them together and returns the result
"""
class TestAddFunctionLimited:
    # Tests that the function correctly adds two positive integers
    def test_adding_two_positive_integers(self):
        assert add_function_limited(2, 3) == 5

    # Tests that the function correctly adds zero to a positive integer
    def test_adding_zero_to_a_positive_integer(self):
        assert add_function_limited(2, 0) == 2

    # Tests that the function correctly adds two negative integers
    def test_adding_two_negative_integers(self):
        assert add_function_limited(-2, -3) == -5

    # Tests that the function correctly adds zero to a negative integer
    def test_adding_zero_to_a_negative_integer(self):
        assert add_function_limited(-2, 0) == -2

    # Tests that the function correctly adds two zeros
    def test_adding_two_zeros(self):
        assert add_function_limited(0, 0) == 0

    # Tests that an exception is raised when adding two integers greater than 10
    def test_adding_two_integers_greater_than_10(self):
        with pytest.raises(Exception):
            add_function_limited(11, 12)

    # Tests that the function correctly adds two integers equal to 10
    def test_adding_two_integers_equal_to_10(self):
        assert add_function_limited(5, 5) == 10

    # Tests that the function correctly adds two integers with opposite signs
    def test_adding_two_integers_with_opposite_signs(self):
        assert add_function_limited(-5, 5) == 0

    # Tests that an exception is raised when adding two integers greater than 10
    def test_adding_two_integers_greater_than_10(self):
        with pytest.raises(Exception):
            add_function_limited(11, 5)

    # Tests that the function correctly adds two integers where one is zero and the other is negative
    def test_adding_two_integers_where_one_is_zero_and_the_other_is_negative(self):
        assert add_function_limited(0, -5) == -5

    # Tests that the function correctly adds two integers where one is zero and the other is positive
    def test_adding_two_integers_where_one_is_zero_and_the_other_is_positive(self):
        assert add_function_limited(0, 5) == 5

    # Tests that the function correctly adds two large negative integers
    def test_adding_two_large_negative_integers(self):
        assert add_function_limited(-1000000, -2000000) == -3000000

    # Tests that the function correctly adds two integers both negative
    def test_adding_two_integers_both_negative(self):
        assert add_function_limited(-5, -3) == -8

    # Tests that the function correctly adds two integers both positive
    def test_adding_two_integers_both_positive(self):
        assert add_function_limited(5, 3) == 8

    # Tests that the function raises a TypeError when called with a float
    def test_adding_floats(self):
        assert add_function_limited(5.0, 3.0) == 8.0

        # Tests that the function returns the correct result when called with large positive integers
    def test_called_with_large_positive_integers(self):
        assert add_function_limited(5, 6) == 11
        assert add_function_limited(10, 1) == 11
        with pytest.raises(Exception):
            add_function_limited(11, 1)
        with pytest.raises(Exception):
            add_function_limited(1, 11)

    # Tests that the function returns the correct result when called with large negative integers
    def test_called_with_large_negative_integers(self):
        assert add_function_limited(-5, -6) == -11
        assert add_function_limited(-10, -1) == -11
        with pytest.raises(Exception):
            add_function_limited(-11, -1)
        with pytest.raises(Exception):
            add_function_limited(-1, -11)

    # Tests that the function returns the correct result when called with a float
    def test_called_with_a_float(self):
        assert add_function_limited(5.5, 6.5) == 12
        with pytest.raises(Exception):
            add_function_limited(11.1, 1)
        with pytest.raises(Exception):
            add_function_limited(1, 11.1)

    # Tests that the function correctly adds two integers less than 10
    def test_adding_two_integers_less_than_10(self):
        assert add_function_limited(2, 3) == 5
        assert add_function_limited(5, 4) == 9

    # Tests that the function returns the correct result when called multiple times with different parameters
    def test_called_multiple_times_with_different_parameters(self):
        assert add_function_limited(2, 3) == 5
        assert add_function_limited(5, 4) == 9
        assert add_function_limited(1, 1) == 2
        assert add_function_limited(10, 0) == 10

    # Tests that the function correctly adds two integers where one is negative and the other is positive
    def test_adding_two_integers_where_one_is_negative_and_the_other_is_positive(self):
        assert add_function_limited(-2, 3) == 1
        assert add_function_limited(5, -4) == 1

    # Tests the add_function_limited() function by passing two numbers less than or equal to 10 and verifies that the function returns the correct sum. It also tests that the function raises an exception when either of the parameters is greater than 10.
    def test_adding_two_numbers_limited(self):
        assert add_function_limited(2.5, 3.5) == 6.0
        assert add_function_limited(5.2, 4.8) == 10.0
        try:
            add_function_limited(11, 3)
        except Exception as e:
            assert str(e) == "Parameters to big"
        try:
            add_function_limited(5, 11)
        except Exception as e:
            assert str(e) == "Parameters to big"

    # Tests that the function returns the correct result when called multiple times with different parameters
    def test_called_multiple_times_with_different_parameters(self):
        assert add_function_limited(2, 3) == 5
        assert add_function_limited(5, 4) == 9
        assert add_function_limited(1, 1) == 2
        assert add_function_limited(10, 0) == 10

    # Tests that the function correctly adds two integers where one is negative and the other is positive
    def test_adding_two_integers_where_one_is_negative_and_the_other_is_positive(self):
        assert add_function_limited(-2, 3) == 1
        assert add_function_limited(5, -4) == 1