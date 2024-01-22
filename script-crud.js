// encontrar o botao adicionar tarefa

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

btnAdicionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden");
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefaut();
  const tarefa = {
    descricao: textarea.Value
  }
});
