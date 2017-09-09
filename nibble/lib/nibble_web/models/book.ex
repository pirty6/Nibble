defmodule NibbleWeb.Book do
  use NibbleWeb, :model

schema "books" do
  field :titulo, :string
  field :autor, :string
  field :codigo, :integer
  field :descripcion, :string
  field :generos, :string
  field :editorial, :string
end

  def changeset(struct, params \\ %{}) do
    struct
    |>cast(params, [:titulo, :auto, :codigo, :descripcion, :genero, :editorial])
    |>validate_required([:titulo, :auto, :codigo, :descripcion, :genero, :editorial])
  end

end
