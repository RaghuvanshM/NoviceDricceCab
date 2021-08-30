
export const getIsUserAuth = (state) => state.user.isAuth
export const getUserProfile = (state) => state
export const getPhoneNumber = (state)=>state.user.phonenumber
export const getAddress =(state)=>state.user.currentAddress
export const getPickUpLocation =(state)=>state.user.pickupaddress
export const getDropUpLocation =(state)=>state.user.dropaddress

export const getButtonClick =(state)=>state.user.issubmit;
export const getdriverId = (state)=>state.user.userid;
export const geDocButtonClick =(state)=>state.document.isclick

export const getPhoneNumberdata = (state)=>state.user.phonnumberdata

export const getApifailed = (state)=>state.user.apifailed

export const getisUserDetail = (state)=>state.user.isuserdetail

export const getisCabinfo = (state)=>state.user.iscabinfo

export const getloginDriverid= (state)=>state.user.logindriverid
// export const getJwtToken = (state: IStoreState) =>
//   state.user?.profile?.access_token || '';
// export const getWelcomeInfoShow = (state: IStoreState) =>
//   state.user.showWelcomeInfo;
// export const getErrorValue = (state: IStoreState) => state.user.isError;
// export const getSubmitValue = (state: IStoreState) => state.user.isSubmit;
