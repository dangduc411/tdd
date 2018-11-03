class HomeController < ApplicationController
  def index
    # Authenticate a session with your Service Account
    session = GoogleDrive::Session.from_service_account_key("learnjpn-38a541147f0c.json")
    @spreadsheets = session.files
  end

  def book
    # Authenticate a session with your Service Account
    session = GoogleDrive::Session.from_service_account_key("learnjpn-38a541147f0c.json")
    spreadsheet = session.file_by_id(params[:spreadsheet_id])
    @worksheets = spreadsheet.worksheets
    @spreadsheet = params[:spreadsheet_id]
  end

  def random
    # Authenticate a session with your Service Account
    session = GoogleDrive::Session.from_service_account_key("learnjpn-38a541147f0c.json")
    spreadsheet = session.file_by_id(params[:spreadsheet_id])
    @worksheet = spreadsheet.worksheet_by_title(params[:worksheet_title])
  end

  def about
  end
end
