class HomeController < ApplicationController
  def index
    # Authenticate a session with your Service Account
    session = GoogleDrive::Session.from_service_account_key("learnjpn-38a541147f0c.json")
    @spreadsheets = session.files
    @spreadsheets = @spreadsheets.sort_by{ |s| s.title }
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
    @worksheet = @worksheet.rows.to_s
  end

  def multi_random
    arr_worksheet_title = request.query_string.split(',')
    session = GoogleDrive::Session.from_service_account_key("learnjpn-38a541147f0c.json")
    spreadsheet = session.file_by_id(params[:spreadsheet_id])
    @worksheet_temp = nil
    arr_worksheet_title.each do |worksheet_title|
      @worksheet = spreadsheet.worksheet_by_gid(worksheet_title)
      if(@worksheet_temp.nil?)
        @worksheet_temp = @worksheet.rows
      else
        @worksheet_temp += @worksheet.rows
      end
    end
    @worksheet = @worksheet_temp.to_s
    render "random"
  end

  def about
  end
end
