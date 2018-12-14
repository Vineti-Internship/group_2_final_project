class OrdersProductsController < ApplicationController
  before_action :set_orders_product, only: [:show, :update, :destroy]

  # GET /orders_products
  def index
    @orders_products = OrdersProduct.all

    render json: @orders_products
  end

  # GET /orders_products/1
  def show
    render json: @orders_product
  end
  
  # POST /orders_products
  def create
    @orders_product = OrdersProduct.new(orders_product_params)
    @orders_product.order.pCost += (@orders_product.product.price*@orders_product.quantinity)
    Order.find_by_id(@orders_product.order.id).update({:pCost => @orders_product.order.pCost})

    if @orders_product.save
      render json: @orders_product, status: :created, location: @orders_product
    else
      render json: @orders_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders_products/1
  def update
    if @orders_product.update(orders_product_params)
      render json: @orders_product
    else
      render json: @orders_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders_products/1
  def destroy
    @temp= Order.find_by_id(@orders_product.order.id).pCost - (@orders_product.product.price*@orders_product.quantinity)
    Order.find_by_id(@orders_product.order.id).update({:pCost => @temp})
    @orders_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_orders_product
      @ord= Order.where(["user_id = ?",params[:id]]).last
      @orders_product = OrdersProduct.where("order_id = ?",@ord.id)
    end

    # Only allow a trusted parameter "white list" through.
    def orders_product_params
      params.require(:orders_product).permit(:order_id, :product_id, :quantinity)
    end
end
