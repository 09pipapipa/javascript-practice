require "test_helper"

class JavascriptControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get javascript_index_url
    assert_response :success
  end
end
