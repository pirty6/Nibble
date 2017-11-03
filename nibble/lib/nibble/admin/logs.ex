defmodule Nibble.Admin.Logs do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Admin.Logs


  schema "admin_logs" do
    field :Usuario, :string
    field :description, :string
    fiels :id, :num
    field :stamp, :date

    timestamps()
  end

  @doc false
  def changeset(%Logs{} = logs, attrs) do
    logs
    |> cast(attrs, [:Usuario, :description, :stamp])
    |> validate_required([:Usuario, :description, :stamp])
  end
end
