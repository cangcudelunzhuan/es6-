import creatUser from '@/util/creatUser'
class userMap extends creatUser {
  constructor(name) {
    super(name)
  }
  say () {
    console.log('>>>>userMap')
    this.sayName()
  }
}
export default userMap
