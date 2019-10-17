export default async ({ from, store, redirect }) => {
  if (!from) return
  const token = localStorage.getItem("token");
  if (token) {
    await store.dispatch("removeToken");
    localStorage.setItem("isLogin", 0);
  }
  redirect("/")
}
