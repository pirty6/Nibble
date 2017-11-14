defmodule Nibble.ChangelogTest do
  use Nibble.DataCase

  alias Nibble.Changelog

  describe "logs" do
    alias Nibble.Changelog.Log

    @valid_attrs %{change: "some change", role: "some role", user: "some user", userid: "some userid"}
    @update_attrs %{change: "some updated change", role: "some updated role", user: "some updated user", userid: "some updated userid"}
    @invalid_attrs %{change: nil, role: nil, user: nil, userid: nil}

    def log_fixture(attrs \\ %{}) do
      {:ok, log} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Changelog.create_log()

      log
    end

    test "list_logs/0 returns all logs" do
      log = log_fixture()
      assert Changelog.list_logs() == [log]
    end

    test "get_log!/1 returns the log with given id" do
      log = log_fixture()
      assert Changelog.get_log!(log.id) == log
    end

    test "create_log/1 with valid data creates a log" do
      assert {:ok, %Log{} = log} = Changelog.create_log(@valid_attrs)
      assert log.change == "some change"
      assert log.role == "some role"
      assert log.user == "some user"
      assert log.userid == "some userid"
    end

    test "create_log/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Changelog.create_log(@invalid_attrs)
    end

    test "update_log/2 with valid data updates the log" do
      log = log_fixture()
      assert {:ok, log} = Changelog.update_log(log, @update_attrs)
      assert %Log{} = log
      assert log.change == "some updated change"
      assert log.role == "some updated role"
      assert log.user == "some updated user"
      assert log.userid == "some updated userid"
    end

    test "update_log/2 with invalid data returns error changeset" do
      log = log_fixture()
      assert {:error, %Ecto.Changeset{}} = Changelog.update_log(log, @invalid_attrs)
      assert log == Changelog.get_log!(log.id)
    end

    test "delete_log/1 deletes the log" do
      log = log_fixture()
      assert {:ok, %Log{}} = Changelog.delete_log(log)
      assert_raise Ecto.NoResultsError, fn -> Changelog.get_log!(log.id) end
    end

    test "change_log/1 returns a log changeset" do
      log = log_fixture()
      assert %Ecto.Changeset{} = Changelog.change_log(log)
    end
  end
end
