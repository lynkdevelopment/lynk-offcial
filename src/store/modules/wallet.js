
const wallet  ={
  state: {
    address: '0x0000000000000000000000000000000000000000',
    invite_address:null,
    balance: 0,
    chain_id:0,
    target_chain_id:0,
    sat_balance:0,
   },
  getters: {
    is_connected: state => {
      let teo =  state.target_chain_id == state.chain_id && state.target_chain_id !=0 && state.address!="0x0000000000000000000000000000000000000000"&& state.address!="0";
      return teo;
    },
    chain_id: state => {

      return state.chain_id
    },
    sat_balance: state => {

      return state.sat_balance
    },
    address: state => {
      this.is_connected();
      return state.address
    },
    invite_address: state => {
      return state.invite_address
    },
    target_chain_id: state => {
      return state.target_chain_id
    },
    balance: state => {
      return state.balance
    },
  },
  mutations: {
    UPDATE:(state, payload)=> {
      console.log(payload)
      for(const key in payload){
        if(typeof state[key] != 'undefined')  state[key] = payload[key]
      }
    },

    SET_SAT_BALANCE:(state, payload)=> {
      state.sat_balance = payload
    },
    SET_CHAIN_ID:(state, payload)=> {
      state.chain_id = payload
    },
    SET_TARGET_CHAIN_ID:(state, payload)=> {
      state.target_chain_id = payload
    },
    SET_ADDRESS :(state, payload)=> {
      // console.log("address :-> "+payload);
      state.address = payload
    },

    SET_REF_ADDRESS:(state, payload)=> {
      if (payload === 0) {
        state.invite_address = ''
      } else {
        state.invite_address = payload
      }
    }
  }
}
export  default  wallet;