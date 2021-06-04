defmodule Ransom do
  @moduledoc """
  Documentation for `Ransom`.
  """
  @spec can_scramble?(String.t(), String.t()) :: boolean()
  def can_scramble?(available_letters, message) do
    if String.length(available_letters) >= String.length(message) do
      al_char_count_map = to_char_count_map(available_letters)
      message_char_count_map = to_char_count_map(message)

      Enum.reduce(message_char_count_map, true, fn {message_char, message_char_count}, acc ->
        if is_nil(al_char_count_map[message_char]) do
          false
        else
          if acc && al_char_count_map[message_char] >= message_char_count, do: true, else: false
        end
      end)
    else
      false
    end
  end

  defp to_char_count_map(str) do
    str
    |> String.downcase()
    |> String.graphemes()
    |> Enum.reject(&(&1 == " "))
    |> Enum.frequencies()
  end
end
