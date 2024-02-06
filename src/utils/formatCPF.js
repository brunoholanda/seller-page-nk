const formatCpf = (cpf) => {
    const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCPF;

};

module.exports = {
    formatCpf,
};