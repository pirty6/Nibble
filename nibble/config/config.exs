# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :nibble,
  ecto_repos: [Nibble.Repo]

# Configures the endpoint
config :nibble, NibbleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "istEDiz9z9PjYr9mBEEKHCSDkaD0n4mdvJg1Kdho1UkkKeDjcZGBle9ekOXMQDEg",
  render_errors: [view: NibbleWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Nibble.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :guardian, Guardian,
  allowed_algos: ["HS512"], # optional
  verify_module: Guardian.JWT,  # optional
  issuer: "nibble",
  ttl: { 30, :days },
  allowed_drift: 2000,
  verify_issuer: true, # optional
  secret_key: "H+hvqQi2Vsmu+j8n66116YtDtI8QC6OQ7vSORZzq7MWqvtver9noyi5DN3pqvcQN",
  serializer: Nibble.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

config :mime, :types, %{
  "application/json" => ["json"]
}
