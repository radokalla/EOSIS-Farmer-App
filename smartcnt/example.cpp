#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

class [[eosio::contract]] example : public contract {
  public:
      using contract::contract;

      [[eosio::action]]
      void hi( name user ) {
         print( "Hello, ", name{user}," your Lawn Mowing task has been confirmed by Mike for 3 hours");
      }
};
EOSIO_DISPATCH( example, (hi))