import subprocess

def download_packages(file_path):
    with open(file_path, 'r') as file:
        packages = file.read().splitlines()

    for package in packages:
        print(f"Downloading {package}...")
        subprocess.call(['pip', 'install', package])

    print("All packages downloaded successfully.")

# Specify the path to the text file containing the package names
file_path = "C:\\Users\\hp\\OneDrive\\Desktop\\Packages.txt"

# Call the function to download the packages
download_packages(file_path)
