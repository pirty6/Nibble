defmodule Nibble.Repo.Migrations.AddUrlPdfTo_Books do
  use Ecto.Migration

  def change do
    alter table(:books) do
      add :urlpdf, :string
    end
  end
end
