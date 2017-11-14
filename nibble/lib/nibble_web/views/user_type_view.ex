defmodule NibbleWeb.UserTypeView do
  use NibbleWeb, :view
  alias NibbleWeb.UserTypeView


  def render("index.json", %{user_types: user_types}) do
    %{type: "role",
      data: render_many(user_types, UserTypeView, "user_type.json")}
  end

  def render("show.json", %{user_type: user_type}) do
    %{data: render_one(user_type, UserTypeView, "user_type.json")}
  end

  def render("user_type.json", %{user_type: user_type}) do
    %{actions: user_type.actions
    }
  end

end
