require 'test_helper'

class ProductTest < ActiveSupport::TestCase   

    test 'should not save product without params' do
        product = Product.new
        assert_not product.save ,'Saved the product without params'
    end
    test 'should not save product without Required params' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:valid).price,
            'description' => products(:valid).description }
        );
        assert_not product.save
    end 
    test 'should not save product without valid imageUrl' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:valid).price,
            'store_id' => products(:valid).store_id,
            'imageUrl' => products(:invalid).imageUrl,
            'description' => products(:valid).description }
        );
        assert_not product.save
    end
    test 'should not save product without valid Name' do
        product = Product.new({
            'Name' => products(:invalid).Name,
            'price' => products(:valid).price,
            'store_id' => products(:valid).store_id,
            'imageUrl' => products(:valid).imageUrl,
            'description' => products(:valid).description }
        );
        assert_not product.save
    end
    test 'should not save product without valid price' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:invalid).price,
            'store_id' => products(:valid).store_id,
            'imageUrl' => products(:valid).imageUrl,
            'description' => products(:valid).description }
        );
        assert_not product.save    
    end
    test 'should not save product without valid store_id' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:valid).price,
            'store_id' => products(:invalid).store_id,
            'imageUrl' => products(:valid).imageUrl,
            'description' => products(:valid).description }
        );
        assert_not product.save    
    end
    test 'should not save product without valid description' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:valid).price,
            'store_id' => products(:valid).store_id,
            'imageUrl' => products(:valid).imageUrl,
            'description' => products(:invalid).description }
        );
        assert_not product.save    
    end
    test 'should not save product with invalid params ' do
        product = Product.new({
            'Name' => products(:invalid).Name,
            'price' => products(:invalid).price,
            'store_id' => products(:invalid).store_id,
            'imageUrl' => products(:invalid).imageUrl,
            'description' => products(:invalid).description }
        );
        assert_not product.save    
    end
    test 'should  save product with valid params ' do
        product = Product.new({
            'Name' => products(:valid).Name,
            'price' => products(:valid).price,
            'store_id' => products(:valid).store_id,
            'imageUrl' => products(:valid).imageUrl,
            'description' => products(:valid).description }
        );
        assert product.save    
    end
end
