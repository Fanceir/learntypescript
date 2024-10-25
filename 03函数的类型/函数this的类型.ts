const obj = {
  name: "nihao",
  studying: function () {
    console.log(this.name);
  },
};

obj.studying();
//ts会自动推导出this的类型，如果不能就要手动指定this
function foooo(this: { name: string }, info: { name: string }) {
  console.log(this);
}

foooo.call({ name: "nihao" }, { name: "ada" });
