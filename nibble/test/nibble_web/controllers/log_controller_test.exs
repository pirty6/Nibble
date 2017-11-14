defmodule NibbleWeb.LogControllerTest do
  use NibbleWeb.ConnCase

  alias Nibble.Changelog

  @create_attrs %{change: "some change", role: "some role", user: "some user", userid: "some userid"}
  @update_attrs %{change: "some updated change", role: "some updated role", user: "some updated user", userid: "some updated userid"}
  @invalid_attrs %{change: nil, role: nil, user: nil, userid: nil}

  def fixture(:log) do
    {:ok, log} = Changelog.create_log(@create_attrs)
    log
  end

  describe "index" do
    test "lists all logs", %{conn: conn} do
      conn = get conn, log_path(conn, :index)
      assert html_response(conn, 200) =~ "Listing Logs"
    end
  end

  describe "new log" do
    test "renders form", %{conn: conn} do
      conn = get conn, log_path(conn, :new)
      assert html_response(conn, 200) =~ "New Log"
    end
  end

  describe "create log" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post conn, log_path(conn, :create), log: @create_attrs

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == log_path(conn, :show, id)

      conn = get conn, log_path(conn, :show, id)
      assert html_response(conn, 200) =~ "Show Log"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, log_path(conn, :create), log: @invalid_attrs
      assert html_response(conn, 200) =~ "New Log"
    end
  end

  describe "edit log" do
    setup [:create_log]

    test "renders form for editing chosen log", %{conn: conn, log: log} do
      conn = get conn, log_path(conn, :edit, log)
      assert html_response(conn, 200) =~ "Edit Log"
    end
  end

  describe "update log" do
    setup [:create_log]

    test "redirects when data is valid", %{conn: conn, log: log} do
      conn = put conn, log_path(conn, :update, log), log: @update_attrs
      assert redirected_to(conn) == log_path(conn, :show, log)

      conn = get conn, log_path(conn, :show, log)
      assert html_response(conn, 200) =~ "some updated change"
    end

    test "renders errors when data is invalid", %{conn: conn, log: log} do
      conn = put conn, log_path(conn, :update, log), log: @invalid_attrs
      assert html_response(conn, 200) =~ "Edit Log"
    end
  end

  describe "delete log" do
    setup [:create_log]

    test "deletes chosen log", %{conn: conn, log: log} do
      conn = delete conn, log_path(conn, :delete, log)
      assert redirected_to(conn) == log_path(conn, :index)
      assert_error_sent 404, fn ->
        get conn, log_path(conn, :show, log)
      end
    end
  end

  defp create_log(_) do
    log = fixture(:log)
    {:ok, log: log}
  end
end
