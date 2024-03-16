
const UserInfor = ({ params} : { params : {user_id : string} }) => {
  return (
    <div> người dùng : {params.user_id}</div>
  )
}

export default UserInfor