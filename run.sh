cd "./build"
touch netlify.toml

echo "[build]
# Directory to change to before starting a build.
# This is where we will look for package.json/.nvmrc/etc.
# If not set, defaults to the root directory.

# Directory that contains the deploy-ready HTML files and assets generated by
# the build. This is relative to the base directory if one has been set, or the
# root directory if a base has not been set. This sample publishes the
# directory located at the absolute path \"root/project/build-output\"
publish = \"./\"

# Default build command.
command = \"yarn build\"" > ./netlify.toml
cd ..