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
    resources "/books", BookController
    # get "/", PlaceController, :index
  end

  scope "/app", NibbleWeb do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :app
  end

  scope "/api/libreria", NibbleWeb do
    pipe_through :browser # Use the default browser stack

    # get "/", BookController, :index
    # # get "/book/new", BookController, :new
    # # post "/book", BookController, :create
    # resources "/", BookController do
    #    resources "/books", BookController, except: [:new, :edit]
    #  end
    # resources "/books", BookController, except: [:new, :edit, :delete, :create, :index, :show]
    get "/", BookController, :indexjson
  end

  scope "/api/mapa", NibbleWeb do
    pipe_through :browser
    resources "/", PlaceController, except: [:new, :edit]
  end

  scope "/admin", NibbleWeb do
    pipe_through :browser
    resources "/", UserController
    get "/*path", PageController, :app
      # resources "/books", BookController
    # get "/allbooks", BookController, :indexcms

  end

  scope "/api/users", NibbleWeb do
    pipe_through :browser

    # resources "/", UserController
  end

  scope "/cms/libreria", NibbleWeb do
    pipe_through :browser
    resources "/", BookController
  end

  # Other scopes may use custom stacks.
  # scope "/api", NibbleWeb do
  #   pipe_through :api
  # end
end
