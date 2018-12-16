require 'test_helper'

class FinalOrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @final_order = final_orders(:one)
  end

  test "should get index" do
    get final_orders_url, as: :json
    assert_response :success
  end

  test "should create final_order" do
    assert_difference('FinalOrder.count') do
      post final_orders_url, params: { final_order: { courier_id: @final_order.courier_id, order_id: @final_order.order_id, user_id: @final_order.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show final_order" do
    get final_order_url(@final_order), as: :json
    assert_response :success
  end

  test "should update final_order" do
    patch final_order_url(@final_order), params: { final_order: { courier_id: @final_order.courier_id, order_id: @final_order.order_id, user_id: @final_order.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy final_order" do
    assert_difference('FinalOrder.count', -1) do
      delete final_order_url(@final_order), as: :json
    end

    assert_response 204
  end
end
