defmodule NibbleWeb.Router do
  use NibbleWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", NibbleWeb do
    pipe_through :browser # Use the default browser stack

    # get "/", BookController, :index
  end

  scope "/app", NibbleWeb do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :app
  end

  scope "/api/library", NibbleWeb do
    pipe_through :browser # Use the default browser stack

    # get "/", BookController, :index
    # # get "/book/new", BookController, :new
    # # post "/book", BookController, :create
    # get "/:id/:urlpdf", BookController, :
    resources "/", BookController do
      resources "/books", BookController, except: [:new, :edit]
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", NibbleWeb do
  #   pipe_through :api
  # end
end
