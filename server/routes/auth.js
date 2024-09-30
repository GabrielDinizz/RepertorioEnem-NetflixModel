const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log('E-mail já cadastrado');
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Encriptar a senha
    const hashedPassword = await bcrypt.hash(password, 10); // O '10' é o número de rounds

    // Criar o novo usuário com a senha encriptada
    const newUser = await User.create({ username, email, password: hashedPassword });

    // Exibir a mensagem no console do servidor
    console.log('Usuário cadastrado com sucesso!', newUser);

    // Retornar uma resposta ao cliente
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });

  } catch (error) {
    console.log('Erro ao cadastrar usuário', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se o usuário existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log(`Usuário não encontrado: ${email}`);
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Comparar a senha fornecida com a senha hashada
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log(`Senha inválida para o usuário: ${email}`);
            return res.status(401).json({ error: 'Senha inválida' });
        }

        // Se tudo estiver certo, o usuário logou com sucesso
        console.log('Usuário logado com sucesso:', user);
        res.status(200).send('Login bem-sucedido (verifique o console do servidor)');
    } catch (error) {
        console.log('Erro ao fazer login', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

// Exportar as rotas e o middleware (se necessário)
module.exports =  router;
  