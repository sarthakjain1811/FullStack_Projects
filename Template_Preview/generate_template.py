from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow

CLIENT_SECRETS_FILE = r"C:\Users\hp\OneDrive\Desktop\Template_Preview\client_secret.json"
# Define the scopes required for accessing specific APIs
SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/presentations']

# Set up the OAuth 2.0 flow
flow = InstalledAppFlow.from_client_secrets_file(
    CLIENT_SECRETS_FILE,
    scopes=SCOPES
)

# Perform the OAuth 2.0 authorization
credentials = flow.run_local_server(port=0)

# Create the Google API service instance
service = build('slides', 'v1', credentials=credentials)

# Print success message
print("Success")
