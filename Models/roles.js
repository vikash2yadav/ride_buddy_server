const { STATUS_CODES } = require("../Config/constant");
const {
    roles: roleSchema
  } = require("../Database/Schema");

class roleModel {

  // add
  async add(bodyData) {
    let data = await roleSchema.findOne({
        where: {
            name: bodyData?.name
        }
    });

    if(data){
        return {
            status: STATUS_CODES.ALREADY_REPORTED
        }
    }

    return await roleSchema.create(bodyData);
  }

  // update
  async update() {}

  // delete
  async delete() {}

  // get
  async get() {}

  // list
  async list() {}
}

module.exports = roleModel;
