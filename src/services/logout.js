import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export const is_avaliador = ref(false);
export const is_professor = ref(false);
export const is_aluno = ref(false);
export const is_logged = ref(false);
export const router = useRouter();

export const logout = () => {
    sessionStorage.clear();
    is_avaliador.value = false;
    is_professor.value = false;
    is_aluno.value = false;
    is_logged.value = false;
    router.push({ name: 'Login' });
    window.location.reload(true);
};

export const setupSharedModule = () => {
    onMounted(() => {
        is_avaliador.value = sessionStorage.getItem('is_avaliador');
        is_professor.value = sessionStorage.getItem('is_professor');
        is_aluno.value = sessionStorage.getItem('is_aluno');
        is_logged.value = sessionStorage.getItem('is_logged');
    });
};
