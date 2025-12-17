#####
# This file copies the server scripts over to client scripts,
# to make sure they're in sync.
# It also replaces the announce functions with their client versions.
#####

from pathlib import Path

cwd = Path.cwd()

server_path = Path("kubejs/server_scripts/forbidden_interactions/").resolve()
client_path = Path("kubejs/client_scripts/forbidden_interactions/").resolve()

server_files = list(server_path.glob("*.js"))
print("Cloning to client_scripts/forbidden_interactions/ :")

for file in server_files:
    name = file.name
    file_path_s = server_path.as_posix() + "/" + file.name
    file_path_c = client_path.as_posix() + "/" + file.name
    path_server = Path(file_path_s).resolve()
    path_client = Path(file_path_c).resolve()
    print(
        "\t  "
        + name
        + f"  \t{round((server_files.index(file) + 1) / len(server_files) * 100, 0)}%",
    )

    f = open(path_server)
    filedata = f.read()
    f.close()

    new_data = filedata.replace("WarnPlayer", "_WarnPlayer")

    f = open(path_client, "w")
    f.write(new_data)
    f.close()
