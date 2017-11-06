defmodule Nibble.Registration do

  def create(changeset, repo) do
    changeset
    |> repo.insert()
  end
end
