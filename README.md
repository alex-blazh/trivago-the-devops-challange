# Trivago web application deployment manual #

Before deploying stack to swarm cluster we have to do some preparation

- create networks:

```(bash)
docker network create -d overlay --internal internal
docker network create -d overlay public
vm.max_map_count=262144
```

- add labels to nodes:
type=frontend
type=databases - to node which will store databases data on local disk

- On the node with type=databases create folder and grant proper permissions

```(bash)
mkdir -p /mnt/data/pgdata
mkdir -p /mnt/data/elasticsearch
chmod g+w /mnt/data/elasticsearch
chown :1000 /mnt/data/elasticsearch
```

- Configure host virtual setting for elasticsearch
   Run the following command as root:

```(bash)
sysctl -w vm.max_map_count=262144
```

To set this value permanently, update the vm.max_map_count setting in

```(bash)
echo vm.max_map_count=262144 >> /etc/sysctl.conf
```

- deploy stack to the cluster

```(bash)
docker stack deploy --compose-file trivago-compose.yml trivago
```

- deploy monitoring stack

```(bash)
cd elk
docker stack deploy --compose-file elk-compose.yml elk
```


