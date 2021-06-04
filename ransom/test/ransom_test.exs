defmodule RansomTest do
  use ExUnit.Case
  doctest Ransom

  test "validates can_scramble?" do
    assert Ransom.can_scramble?("", "") === true
    assert Ransom.can_scramble?("", "abcd") === false
    assert Ransom.can_scramble?("abc", "") === true
    assert Ransom.can_scramble?("abc", "abcd") === false
    assert Ransom.can_scramble?("space test", "test space") === true
    assert Ransom.can_scramble?("space test", "TEST SPACE") === true

    assert Ransom.can_scramble?(
             "#{String.duplicate("asdf", 1000)}z",
             String.duplicate("asdf", 1000)
           ) === true

    assert Ransom.can_scramble?(
             Enum.join(Enum.map(Enum.to_list(?a..?z), fn n -> String.duplicate(<<n>>, 4) end)),
             "this is a ransom note"
           ) === true
  end
end
