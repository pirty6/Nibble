defmodule Nibble.Admin do
  import Ecto.Query, warn: false
  alias Nibble.Repo
  alias Nibble.Admin.Logs

  def list_logs do
    Repo.all(Logs)
  end

  def get_logs!(id), do: Repo.get!(Logs, id)

  def create_logs(attrs \\ %{})do
    %Logs{}
    |> Logs.changeset(attrs)
    |> Repo.update()
  end

  def update_logs(%Logs{} = logs, attrs) do
    logs
    |> Logs.changeset(attrs)
    |> Repo.uppdate()
  end

  def delete_logs(%Logs{} = logs)do
    Logs.changeset(user, %{})
  end
end
