{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  elixirDrv = elixir.override {
    version = "1.11.4";
    rev = "308255bda81e7f76f9bec838cef033e8e869981b";
    sha256 = "1y8fbhli29agf84ja0fwz6gf22a46738b50nwy26yvcl2n2zl9d8";
  };
in mkShell {
  name = "mdsp_exercism";

  buildInputs = [
    # the base program
    exercism
    
    go
    
    elixirDrv

    julia-stable

    # ts pkgs
    nodejs
    yarn

    python39

    # haskell pkgs
    stack
    ghc
    hlint
  
    # terminal stuff
    readline
    curl
  ] ++ lib.optional stdenv.isLinux [ 
        inotify-tools 
        # BEAM observer gtk engine
        gtk-engine-murrine 
      ]
    ++ lib.optionals stdenv.isDarwin (with darwin.apple_sdk.frameworks; [
        CoreFoundation
        CoreServices
      ]);

  shellHook = ''
    echo "WELCOME TO THE MDSP EXERCISM TRACKS!"
  '';
}
