require 'test_helper'

class OrderTest < ActiveSupport::TestCase
    test 'should not save order without params' do
        order = Order.new
        assert_not order.save ,'Saved the order without params'
    end
    test 'should  save order without default param and valid user' do
        order = Order.new({'user' =>  orders(:valid).user})
        assert order.save ,'Could not Save the order without default params'
    end
    test 'should not save order with invalid user' do
        order = Order.new({'user' =>  orders(:invalid).user})
        assert_not order.save ,'Save the order with invalid user'
    end
    test 'should not save order with invalid pCost' do
        order = Order.new({'pCost' =>  orders(:invalid).pCost})
        assert_not order.save , 'Save the order with invalid  pCost'
    end
    test 'should  save order with valid params' do
        order = Order.new({'user' =>  orders(:valid).user,'pCost'=>  orders(:valid).pCost })
        assert order.save ,'Could not Save the order with valid params'
    end
end
