require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  test "Check routing number" do
    visit store_index_url

    first('.catalog li').click_on 'Add to Cart'

    click_on 'Checkout'

    fill_in 'order_name', with: 'Dave Thomas'
    fill_in 'order_address', with: '123 Main St'
    fill_in 'order_email', with: 'dave@dave.com'

    assert_no_selector "#order_routing_number"

    select "Check", from: 'pay_type'

    assert_selector "#order_routing_number"
  end
end

# test "visiting the index" do
#   visit orders_url
#
#   assert_selector "h1", text: "Order"
# end