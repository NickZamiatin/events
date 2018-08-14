const knex= require('./knex');

module.exports = {
  getAll(){
    return knex('events2')
  },
  getOne(id){
    return knex('events2').where('id', id).first();
  },
  create(event){
    return knex('events2').insert(event, '*')
  },
  update(id, event ){
    return knex('events2').where('id', id).update(event, '*');
  },
  delete(id, event ){
    return knex('events2').where('id', id).del();
  }
}