defmodule NibbleWeb.Router do
  use NibbleWeb, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :browser_auth do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
  end

  pipeline :ensure_authed_access do
    plug Guardian.Plug.EnsureAuthenticated,handler: GuardianAuth.HttpErrorHandler
  end

  scope "/", NibbleWeb do
    pipe_through :browser # Use the default browser stack
    # get "/", PlaceController, :index
    # resources "/bookscms", BookController
    # get "/indexcms", BookController, :indexcms
    get "/", PageController, :index
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
    get "/", PlaceController, :indexjson
  end

  # scope "/admin", NibbleWeb do
  #   pipe_through :browser
  #   # resources "/", UserController
  #   get "/*path", PageController, :app
  #     # resources "/books", BookController
  #   # get "/allbooks", BookController, :indexcms
  #
  # end

  scope "/api/users", NibbleWeb do
    pipe_through :browser

    # resources "/", UserController
  end

  scope "/cms", NibbleWeb do
    pipe_through [:browser,:browser_auth]
    get "/", SessionController, :new
    resources "/", SessionController, only: [:new, :create,:delete  ]
    resources "/usuarios", UserController, only: [:new,:create]
  end

  scope "/cms", NibbleWeb do
    pipe_through [:browser,:browser_auth,:ensure_authed_access]
    # get "/*path", PageController, :apps
    resources "/libreria", BookController
    resources "/usuarios", UserController, only: [:show, :index, :update,:edit,:delete]
    resources "/sectores", PlaceController
  end



  # Other scopes may use custom stacks.
  # scope "/api", NibbleWeb do
  #   pipe_through :api
  # end
end
