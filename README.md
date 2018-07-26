# lang
<h3>我爱学习，学习使我快乐</h3>


<h4>通过ssh连接</h4>
        <li>$ ssh-keygen -t rsa -C "yourEmail@yourEmail.com" 可以一路回车新建ssh key</li>
        <li>将ssh可以写入github找到 ssh C:\Users\Administrator.ssh 下面的id_rsa.pub <br>
            &emsp; &ensp;用sublime 打开 复制一下 打开github 登录你的的账户 找到 settings–> SSH and GPG keys -> new SSH keys -> <br>
            &emsp;&ensp;填写title 和 粘贴你已经复制好的 ssh key –> Add SSH key</li>
        <li>验证是否连接成功 $ ssh -T git@github.com<br>
            &emsp;&ensp;如果 SSH and GPG keys 里面的钥匙由黑灰色变为了绿色就 说明能够正常连接 否则不能正常连接上github</li>
    
    
<h4>git日常操作</h4>
        <li>克隆仓库：git clone git@github.com:langAquarius/lang.git</li>
        <li>git add (将工作区的文件添加到暂存区)</li>
        <li>git commit (将暂存区的文件提交到本地版本库)</li>
        <li>git push (将本地版本库的文件提交到远端版本库)</li>
        <li>拉取代码：git pull origin master</li>
        <li>新建分支：git branch lang</li>
        <li>删除分支：git branch -d lang</li>
        <li>推送远程：git push origin master</li>
        <li>查看提交记录：git log</li>
        <li>回滚代码： git reset --hard [commit:6]</li>
        <li>回到最新代码：git reset HEAD | git pull origin master</li>
