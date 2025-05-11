# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.pipenv
    pkgs.ollama
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "vscodevim.vim"
      "ms-python.debugpy"
      "ms-python.python"
    ];

    # Enable previews
    previews = {
      # enable = true;
      # previews = {
      #   web = {
      #     # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
      #     # and show it in IDX's web preview panel
      #     # command = ["npm" "run" "dev"];
      #     # manager = "web";
      #     # env = {
      #     #   # Environment variables to set for your server
      #     #   PORT = "$PORT";
      #     # };
      #   };
      # };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        setup = ''
          pip -m venv .venv
          source .venv/bin/activate
          pip install -r requeriments.txt
        '';
        default.openFiles = [
          "README.md"
          "agent.py"
        ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}
