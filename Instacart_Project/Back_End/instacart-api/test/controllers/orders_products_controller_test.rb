require 'test_helper'

class OrdersProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @orders_product = orders_products(:one)
  end

  test "should get index" do
    get orders_products_url, as: :json
    assert_response :success
  end

  test "should create orders_product" do
    assert_difference('OrdersProduct.count') do
      post orders_products_url, params: { orders_product: { order_id: @orders_product.order_id, product_id: @orders_product.product_id, quantinity: @orders_product.quantinity } }, as: :json
    end

    assert_response 201
  end

  test "should show orders_product" do
    get orders_product_url(@orders_product), as: :json
    assert_response :success
  end

  test "should update orders_product" do
    patch orders_product_url(@orders_product), params: { orders_product: { order_id: @orders_product.order_id, product_id: @orders_product.product_id, quantinity: @orders_product.quantinity } }, as: :json
    assert_response 200
  end

  test "should destroy orders_product" do
    assert_difference('OrdersProduct.count', -1) do
      delete orders_product_url(@orders_product), as: :json
    end

    assert_response 204
  end
end
