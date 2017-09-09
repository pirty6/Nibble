defmodule Nibble.Repo.Migrations.AddBookTable do
  use Ecto.Migration

  def change do
    create table :libros do
      add :titulo, :string
      add :autor, :string
      add :codigo, :integer
      add :descripcion, :string
      add :generos, :string
      add :editorial, :string
    end
  end
end
